// import axios from "axios";
interface Props {
  url: string;
  method: string;
  parameters: null | object;
}

const useAxios = ({ url, method = "get", parameters = null }: Props) => {
  //   const [data, setData] = useState(null);
  //   const [error, setError] = useState(null);
  //   const [loading, setLoading] = useState(false);
  //   useEffect(() => {
  //     setLoading(true);
  //     axios[method](url, parameters)
  //       .then((res: any) => {
  //         setLoading(false);
  //         setData(res.data);
  //       })
  //       .catch((err: any) => {
  //         setLoading(false);
  //         setError(err);
  //       });
  //   }, [url]);
  //   return { data, loading, error };
};

export default useAxios;
