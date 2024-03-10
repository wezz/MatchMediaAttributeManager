export default class MatchMediaAttributeManager {
  private controlelements: HTMLElement[] = [];
  private controlselector = "[data-matchmedia-query]";
  constructor(options?: MatchMediaAttributeManagerInitiationOptions) {
    const constructorOptions = this.parseOptions(options);
    if (!constructorOptions.initiateElements) {
      return;
    }
    this.InitiateElements(constructorOptions.parent);
    window.addEventListener("global-markupchange", (e) => {
      this.InitiateElements((e as any)?.detail?.target ?? document);
    });
  }
  private parseOptions(options?: MatchMediaAttributeManagerInitiationOptions) {
    const defaultOptions = { parent: document.body, initiateElements: true };
    if (
      !options ||
      typeof options !== "object" ||
      (typeof options.parent === "undefined" &&
        typeof options.initiateElements === "undefined")
    ) {
      return defaultOptions;
    }
    return { ...defaultOptions, ...options };
  }
  public InitiateElements(parent: HTMLElement = document.body) {
    const controlElements = [].slice.call(
      parent.querySelectorAll(this.controlselector)
    ) as HTMLElement[];
    const newElements = controlElements.filter((elm) => {
      return (elm as any)["MatchMediaAttributeManager"] !== "activated";
    });
    newElements.forEach((elm) => {
      this.bindEvents(elm);
      (elm as any)["MatchMediaAttributeManager"] = "activated";
    });
    this.controlelements = ([] as HTMLElement[]).concat(
      this.controlelements,
      newElements
    );
  }
  private bindEvents(orgelm: Element) {
    const elm = orgelm as HTMLElement;
    const mediaQuery = elm.getAttribute("data-matchmedia-query") || "";
    if (!mediaQuery) {
      return;
    }

    const matchMedia = window.matchMedia(mediaQuery);
    this.onMatchChange(matchMedia.matches, elm);
    if (matchMedia)
      matchMedia.onchange = (e) => {
        this.onMatchChange(e.matches, elm);
      };
  }

  private onMatchChange(matches: boolean, elm: HTMLElement) {
    const [attribute, value, removeOption] = (
      elm.getAttribute("data-matchmedia-attribute") || ""
    ).split(",");
    var removeWhenNotMatched = removeOption + "" === "true";
    if (matches) {
      if (elm.getAttribute(attribute) + "" !== value + "") {
        elm.setAttribute(attribute, value);
      }
    } else {
      if (removeWhenNotMatched) {
        elm.removeAttribute(attribute);
      }
    }
  }
}
interface MatchMediaAttributeManagerInitiationOptions {
  parent?: HTMLElement;
  initiateElements?: Boolean;
}
