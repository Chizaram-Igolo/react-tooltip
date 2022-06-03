import "./ToolTip.css";

interface IToolTip {
  children: React.ReactElement;
}

const ToolTip: React.FC<IToolTip> = (props) => {
  return (
    <div className={`relative`}>
      {/* Element that tooltip is attached to */}
      <div>{props.children}</div>

      {/* Tooltip */}
      <div
        className={`absolute inset-x-1/2 max-w-md bg-white text-gray-800 rounded-lg overflow-hidden`}
      >
        <div className="tooltip-header bg-green-500 text-white p-4">
          <div className="heading">
            <h4 className="text-xl">This is the header of the tooltip</h4>
          </div>
          <div className="icon"></div>
        </div>
        <div className="tooltip-body min-h-fit p-4 text-left text-sm">
          After Composer has installed the Laravel Breeze package, you may run
          the breeze:install Artisan command. This command publishes the
          authentication views, routes, controllers, and other resources to your
          applicatio
        </div>
        <div className={`bg-orange-300 py-2 px-4 text-sm`}>
          This is the footer of the tooltip
        </div>
      </div>
    </div>
  );
};

export default ToolTip;
