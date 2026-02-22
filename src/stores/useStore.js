import { create } from 'zustand';
import { dataModel } from '../data/index.js';

const useAppStore = create((set, get) => ({
    // Data
    tools: dataModel.tools || [],
    flows: dataModel.flows || [],
    categories: dataModel.categories || [],

    // Investigation State
    inputData: "",
    inputType: null,
    activeFlow: null,
    currentStepIndex: 0,

    // Actions
    setInputData: (data, type) => set({ inputData: data, inputType: type }),

    startFlow: (flowId) => {
        const flow = get().flows.find(f => f.id === flowId);
        if (flow) {
            set({ activeFlow: flow, currentStepIndex: 0 });
        }
    },

    nextStep: () => {
        const { activeFlow, currentStepIndex } = get();
        if (activeFlow && currentStepIndex < activeFlow.steps.length - 1) {
            set({ currentStepIndex: currentStepIndex + 1 });
        }
    },

    prevStep: () => {
        const { currentStepIndex } = get();
        if (currentStepIndex > 0) {
            set({ currentStepIndex: currentStepIndex - 1 });
        }
    },

    resetInvestigation: () => set({
        inputData: "",
        inputType: null,
        activeFlow: null,
        currentStepIndex: 0
    }),
}));

export default useAppStore;
