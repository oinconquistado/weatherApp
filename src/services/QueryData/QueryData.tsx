import { useQuery } from "@tanstack/react-query";

export default class {
  name: string;
  url: string;
  constructor(name: string, url: string) {
    this.name = name;
    this.url = url;
  }

  getData() {
    const { isLoading, error, data, isFetching } = useQuery([this.name], () =>
      fetch(`${this.url}`).then((res: { json: () => any }) => res.json())
    );
    return { isLoading, error, data, isFetching };
  }
}
