import React, { useState } from "react";
import CommunityForm from "./Components/CommunityForm";
import CommunityList from "./Components/CommunityList";

function FoliosAsignados() {
  const [communities, setCommunities] = useState([]);

  const handleAddCommunity = (newCommunity) => {
    setCommunities([...communities, newCommunity]);
  };

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Folios Asignados</h2>
      
        <div className="col-md-12">
          <CommunityForm onAddCommunity={handleAddCommunity} />
        </div>
        <br></br>
        <div className="col-md-12">
          <CommunityList communities={communities} />
        </div>
        
    </div>
  );
}

export default FoliosAsignados;
