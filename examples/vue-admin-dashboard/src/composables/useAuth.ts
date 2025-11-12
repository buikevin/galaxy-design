import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const isAuthenticated = ref(false);
const currentUser = ref<{ email: string; name: string } | null>(null);

export function useAuth() {
  const router = useRouter();

  const login = async (email: string, password: string) => {
    if (email && password) {
      isAuthenticated.value = true;
      currentUser.value = {
        email,
        name: email.split('@')[0] || 'User',
      };
      await router.push('/dashboard');
    }
  };

  const logout = async () => {
    isAuthenticated.value = false;
    currentUser.value = null;
    await router.push('/login');
  };

  return {
    login,
    logout,
    user: computed(() => currentUser.value),
    isLoggedIn: computed(() => isAuthenticated.value),
  };
}
