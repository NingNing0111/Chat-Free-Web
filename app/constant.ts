export const OWNER = "Yidadaa";
export const REPO = "ChatGPT-Next-Web";
export const NAME = "NingNing0111"
export const REPO_URL = `https://github.com/${NAME}/`;
export const ISSUE_URL = `https://github.com/${OWNER}/${REPO}/issues`;
export const RELEASE_URL = `${REPO_URL}/releases`;
export const UPDATE_URL = `${REPO_URL}#keep-updated`;
export const FETCH_COMMIT_URL = `https://api.github.com/repos/${OWNER}/${REPO}/commits?per_page=1`;
export const FETCH_TAG_URL = `https://api.github.com/repos/${OWNER}/${REPO}/tags?per_page=1`;
export const DEFAULT_API_HOST = "https://api.mnzdna.xyz";




export enum Path {
  Home = "/",
  Chat = "/chat",
  Settings = "/settings",
  NewChat = "/new-chat",
  Masks = "/masks",
  Auth = "/auth",
}

export enum SlotID {
  AppBody = "app-body",
}

export enum FileName {
  Masks = "masks.json",
  Prompts = "prompts.json",
}

export enum StoreKey {
  Chat = "chat-next-web-store",
  Access = "access-control",
  Config = "app-config",
  Mask = "mask-store",
  Prompt = "prompt-store",
  Update = "chat-update",
  Sync = "sync",
}

export const MAX_SIDEBAR_WIDTH = 500;
export const MIN_SIDEBAR_WIDTH = 230;
export const NARROW_SIDEBAR_WIDTH = 100;

export const ACCESS_CODE_PREFIX = "nk-";

export const LAST_INPUT_KEY = "last-input";

export const REQUEST_TIMEOUT_MS = 60000;

export const EXPORT_MESSAGE_CLASS_NAME = "export-markdown";

export const OpenaiPath = {
  ChatPath: "v1/chat/completions",
  UsagePath: "dashboard/billing/usage",
  SubsPath: "dashboard/billing/subscription",
  ListModelPath: "v1/models",
};


export const DEFAULT_INPUT_TEMPLATE = `{{input}}`;

export const DEFAULT_SYSTEM_TEMPLATE = `你是一个AI助手，帮助人类解决各种问题。`

export const SUMMARIZE_MODEL = "gpt-3.5-turbo";

export const DEFAULT_MODELS = [
  {
    name: "gpt-3.5-turbo",
    available: true,
  },
  {
    name: "claude-2",
    available: true,
  },
  {
    name: "gpt-4",
    available: true,
  },
  {
    name: "chatglm_std",
    available: true,
  }
] as const;

export const CHAT_PAGE_SIZE = 15;
export const MAX_RENDER_MSG_COUNT = 45;
