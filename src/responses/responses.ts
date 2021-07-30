export interface NpmInfo {
  name: string;
  description: string;
  author: string;
  authorGithub: URL;
  homepage: URL;
  keywords: string[];
}

export interface PipInfo {
  name: string;
  auhor: string;
  auhorEmail: string;
  description: string;
  homepage: URL;
  version: number & symbol;
  keywords: string[];
  authorGithub: URL;
  license: string;
}
