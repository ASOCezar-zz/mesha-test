export default interface IMapLocationReturn {
  region: string;
}

interface IMapLocationProps {
  region: string;
}

export const mapLocation = ({
  region,
}: IMapLocationProps): IMapLocationReturn => {
  return {
    region: region,
  };
};
