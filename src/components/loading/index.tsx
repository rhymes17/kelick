import { ColorRing } from 'react-loader-spinner';

type Props = {};

export const Loading = (props: Props) => {
  return (
    <div className="h-full flex items-center justify-end">
      <div className="flex w-full items-center justify-center">
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={['#02B9B0', '#02B9B0', '#02B9B0', '#02B9B0', '#02B9B0']}
        />
      </div>
    </div>
  );
};
