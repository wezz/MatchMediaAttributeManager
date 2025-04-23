declare class MatchMediaAttributeManager {
    private controlelements;
    private controlselector;
    constructor(options?: MatchMediaAttributeManagerInitiationOptions);
    private parseOptions;
    InitiateElements(parent?: HTMLElement): void;
    private bindEvents;
    private onMatchChange;
}
export default MatchMediaAttributeManager;

declare interface MatchMediaAttributeManagerInitiationOptions {
    parent?: HTMLElement;
    initiateElements?: boolean;
}

export { }
