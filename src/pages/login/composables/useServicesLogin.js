import { ref } from "vue";
import { signInWithEmailAndPasswordApi } from "src/api/auth";
import { errorCodes } from "src/utils/errorCodes";
import { useStatePageStore } from "src/store/useStatePageStore";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

export const useServicesLogin = () => {
  const statePageStore = useStatePageStore();
  const router = useRouter();

  const email = ref("");
  const password = ref("");
  const errorInvalidCredentials = ref(false);

  const { t } = useI18n();

  const onSubmit = async () => {
    statePageStore.setLoading(true, t("loading"));
    try {
      const { user } = await signInWithEmailAndPasswordApi(
        email.value,
        password.value
      );
      if (user.emailVerified) {
        router.push({ name: "Home" });
      }

      errorInvalidCredentials.value = false;
    } catch (error) {
      if (error.code === errorCodes["invalid_credentials"]) {
        errorInvalidCredentials.value = true;
      } else {
        throw new Error(error.message);
      }
    } finally {
      statePageStore.setLoading(false, t("loading"));
    }
  };

  return {
    email,
    password,
    errorInvalidCredentials,
    onSubmit,
  };
};
