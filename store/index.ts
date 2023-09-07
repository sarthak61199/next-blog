import { create } from "zustand";

interface IAuthModal {
  open: boolean;
  setModalChange: () => void;
}

export const useAuthModalStore = create<IAuthModal>()((set) => ({
  open: false,
  setModalChange: () => set((state) => ({ open: !state.open })),
}));
