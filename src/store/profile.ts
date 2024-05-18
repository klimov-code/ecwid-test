import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

import { getCompanyProfile } from '@app/shared/api';

import type { Status } from '#types/misc';
import type { Profile } from '#types/profile';

const useProfileStore = defineStore('storeProfile', () => {
  const profile = ref<Profile>({} as Profile);
  const status = ref<Status>('loading');
  const isLoading = computed(() => status.value === 'loading');

  function getProfile() {
    status.value = 'loading';

    getCompanyProfile()
      .then((result) => {
        status.value = 'success';
        profile.value = result;
      })
      .catch(() => {
        status.value = 'error';
      });
  }

  return {
    status,
    isLoading,
    profile,
    getProfile,
  };
});

export { useProfileStore };
