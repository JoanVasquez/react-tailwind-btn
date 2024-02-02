import { GoBell, GoDatabase } from "react-icons/go";
import { FaCloudDownloadAlt } from "react-icons/fa";

import Button from "../components/Button";

function ButtonPage() {
  const handleClick = () => {
    console.log("Clicked!");
  };

  return (
    <div className="w-full">
      <div>
        <Button
          secondary
          outline
          rounded
          className="mb-5"
          onClick={handleClick}
        >
          <GoBell />
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger outline onMouseEnter={handleClick}>
          <FaCloudDownloadAlt />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning onMouseLeave={handleClick}>
          <GoDatabase />
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Something!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
