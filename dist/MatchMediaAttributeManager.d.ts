export default class MatchMediaAttributeManager {
    private controlelements;
    private controlselector;
    constructor(options?: MatchMediaAttributeManagerInitiationOptions);
    private parseOptions;
    InitiateElements(parent?: HTMLElement): void;
    private bindEvents;
    private onMatchChange;
}
interface MatchMediaAttributeManagerInitiationOptions {
    parent?: HTMLElement;
    initiateElements?: Boolean;
}
export {};
