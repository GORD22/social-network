
export interface IManifest {
  readonly NAME: string;
  readonly DISPLAY?: 'fullscreen' | 'standalone' | 'minimal-ui' | 'browser';
  readonly START_URL?: string;
  readonly SHORT_NAME?: string;
  readonly DESCRIPTION?: string;
  readonly THEME_COLOR?: string;
  readonly BACKGROUND_COLOR?: string;
}

export interface ISeo {
  readonly TITLE: string;
  readonly SITE_NAME: string;
  readonly DESCRIPTION: string;
  readonly LICENSE?: string;
  readonly KEYWORDS?: string[];
  readonly MANIFEST?: IManifest;
}
