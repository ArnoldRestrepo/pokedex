import React from "react";
import { Loader as SemmanticLoader, Dimmer, Segment} from "semantic-ui-react";

const Loader = () => { 
  return (
    <Dimmer as={Segment} blurring active style={{height: "90vh"}}>
      <SemmanticLoader/>
    </Dimmer>
  )
}


export default Loader;