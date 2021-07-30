import fetch from "node-fetch";
import { NpmInfo, PipInfo } from "../responses/responses";

interface Options {
  type: "npm" | "pip";
  packageName?: string;
}

export default class Search {
  public async npm(packageName: string): Promise<NpmInfo> {
    if (typeof packageName !== "string")
      throw new TypeError(`packageName must be string, ${packageName}`);
    return this._getData({ type: "npm", packageName });
  }

  public async pip(packageName: string) {
    if (typeof packageName !== "string")
      throw new TypeError(`packageName must be string, ${packageName}`);
    return this._getData({ type: "pip", packageName });
  }

  private async _getData(options: Options): Promise<any> {
    if (options.type === "npm") {
      const data: any = { data: [] };
      let res = await fetch(
        `https://registry.npmjs.org/${options.packageName}`
      );
      if (res.status !== 200)
        throw new Error("There's an issue with the npm api. ");
      let info = await res.json();
      const name = info.name;
      const description = info.description;
      const keywords = info.keywords;
      const homepage = info.homepage;
      const author = info.author.name;
      const authorGithub = info.author.url;
      Object.assign(data, {
        name,
        description,
        keywords,
        homepage,
        author,
        authorGithub,
      });
      return data;
    }
    if (options.type === "pip") {
      const data: any = { data: [] };
      let res = await fetch(`
        https://pypi.org/pypi/${encodeURIComponent(
          options.packageName.toLowerCase()
        )}/json`);
      if (res.status !== 200)
        throw new Error("There's an issue with the npm api. ");
      let infopip = await res.json();
      const author = infopip.info.author;
      const authorEmail = infopip.info.author_email;
      const homepage = infopip.info.home_page;
      const name = infopip.info.name;
      const description = infopip.info.summary;
      const authorGithub = infopip.info.project_urls.Homepage;
      const license = infopip.info.license;
      const keywords = infopip.info.keywords;
      const version = infopip.info.version;
      Object.assign(data, {
        name,
        description,
        author,
        authorEmail,
        authorGithub,
        homepage,
        keywords,
        version,
        license,
      });
      return data;
    }
  }
}
