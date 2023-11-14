import { ref } from "vue";
import { signInWithEmailAndPasswordApi } from "src/api/auth";
import { errorCodes } from "src/utils/errorCodes";
import { useStatePageStore } from "src/store/useStatePageStore";
import { useRouter } from "vue-router";

export const useServicesLogin = () => {
  const statePageStore = useStatePageStore();
  const router = useRouter();

  const email = ref("");
  const password = ref("");
  const errorEmailAlreadyInUse = ref(false);

  const onSubmit = async () => {
    statePageStore.setLoading(true, "guardando usuario");
    try {
      await signInWithEmailAndPasswordApi(email.value, password.value);
      router.push({ name: "Home" });
      /* const userCredential = await createUserWithEmailAndPasswordApi(
        email.value,
        password.value
      ); */
      // await addUserCollectionApi(userCredential.user);
      //errorEmailAlreadyInUse.value = false;
    } catch (error) {
      if (error.code === errorCodes["email_already_in_use"]) {
        //errorEmailAlreadyInUse.value = true;
      } else {
        throw new Error(error.message);
      }
    } finally {
      statePageStore.setLoading(false, "cargando");
    }
  };

  return {
    email,
    password,
    errorEmailAlreadyInUse,
    onSubmit,
  };
};
