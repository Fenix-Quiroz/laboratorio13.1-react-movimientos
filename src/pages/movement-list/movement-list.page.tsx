import { AppLayout } from "@/layouts";
import React, { useEffect, useState } from "react";
import { MovementVm } from "./movement-list.vm";
import classes from "./movement-list.page.module.css";
import { MovementListTableComponent } from "./components";
import { getMovements } from "./api";
import { mapMovementListFromApiToVm } from "./movement-list.mapper";
import { useParams } from "react-router-dom";
import { MovementListHeaderComponent } from "./components/movement-list-header.component";
export const MovementListPage: React.FC = () => {
  const [movementList, setMovementList] = useState<MovementVm[]>([]);
  const { id } = useParams<string>();
  useEffect(() => {
    if (id) {
      getMovements(id).then((result) =>
        setMovementList(mapMovementListFromApiToVm(result))
      );
    }
  }, []);
  return (
    <AppLayout>
      <div className={classes.root}>
        <MovementListHeaderComponent />
        <MovementListTableComponent movementList={movementList} />
      </div>
    </AppLayout>
  );
};
