export default class fetchData {
  url: string;

  constructor(url: string) {
    this.url = url;
  }

  async getData() {
    let response: any;
    try {
      response = await fetch(this.url).then((response) => response.json());
    } catch (error) {
      console.log(error);
    }
    return { response };
  }
}
