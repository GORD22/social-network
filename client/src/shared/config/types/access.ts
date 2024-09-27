type STRING_PERMISSIONS<T extends string | string[]> = T extends string
  ? { readonly [key in T]: boolean }
  : { readonly [key in T[number]]: boolean };

export type TAccessItem<T = void> = T extends void
  ? {
    readonly VISIBLE: boolean;
  }
  : T extends string | string[]
  ? {
    readonly VISIBLE: boolean;
    readonly PERMISSIONS: STRING_PERMISSIONS<T>;
  }
  : {
    readonly VISIBLE: boolean;
    readonly PERMISSIONS: T;
  };

type TCommon = {
  readonly MESSAGES: TAccessItem;
  readonly PROFILE: TAccessItem;
};

type TProfile = {
  readonly SETTINGS: TAccessItem;
};

type TUser = {
  readonly LOGIN: TAccessItem;
  readonly PROFILE_SETTINGS: TAccessItem;
};

export type IAccess = TCommon & TUser & TProfile;
