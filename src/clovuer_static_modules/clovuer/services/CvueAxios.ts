import Axios from "axios";

export class CvueAxios {
  protected axios = Axios.create();
  public url!: string;

  public setUrl(url: string): CvueAxios {
    this.url = url;
    return this
  }
}
