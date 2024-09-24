import { ref } from "vue";
import {
  createUserWithEmailAndPasswordApi,
  addUserCollectionApi,
  sendEmailVerificationApi,
} from "src/api/auth";
import { errorCodes } from "src/utils/errorCodes";
import { useStatePageStore } from "src/store/useStatePageStore";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

export const useServicesCreateAccount = () => {
  const statePageStore = useStatePageStore();
  const router = useRouter();

  const username = ref("");
  const email = ref("");
  const password = ref("");

  const errorEmailAlreadyInUse = ref(false);

  const { t } = useI18n();

  const onSubmit = async () => {
    statePageStore.setLoading(true, t("loading"));
    try {
      const userCredential = await createUserWithEmailAndPasswordApi(
        email.value,
        password.value
      );
      await addUserCollectionApi(username.value, userCredential.user);
      await sendEmailVerificationApi();
      localStorage.setItem("emailSent", "true");
      router.push({ name: "EmailNoVerified" });
      errorEmailAlreadyInUse.value = false;
    } catch (error) {
      if (error.code === errorCodes["email_already_in_use"]) {
        errorEmailAlreadyInUse.value = true;
      } else {
        throw new Error(error.message);
      }
    } finally {
      statePageStore.setLoading(false, t("loading"));
    }
  };

  const goToLogin = () => {
    router.push({ name: "Login" });
  };

  return {
    username,
    email,
    password,
    errorEmailAlreadyInUse,
    goToLogin,
    onSubmit,
  };
};
