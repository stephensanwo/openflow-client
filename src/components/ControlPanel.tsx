import { HeaderPanel, Switcher, SwitcherItem } from "carbon-components-react";
import { Link } from "react-router-dom";

interface Props {
  expanded: boolean;
}

const ControlPanel: React.FC<Props> = (props) => {
  return (
    <HeaderPanel expanded={props.expanded}>
      <Switcher>
        <SwitcherItem>
          <Link to="javascript:void(0)">Link</Link>
        </SwitcherItem>
      </Switcher>
    </HeaderPanel>
  );
};

export default ControlPanel;
