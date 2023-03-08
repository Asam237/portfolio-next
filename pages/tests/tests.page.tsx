import React, { useEffect, useState } from "react";
import JsonplaceholderService from "../../services/jsonplaceholder.service";

export const TestPage = () => {
  const [dataArray, setDataArray]: any = useState([]);
  useEffect(() => {
    new JsonplaceholderService().getJsonPlaceholder().then((res: any) => {
      setDataArray(res.data);
    });
  });

  return (
    <div>
      {dataArray.mao((item: any, index: any) => {
        return <p key={index}>{item}</p>;
      })}
    </div>
  );
};
