import { Calendar, Collapse, ConfigProvider } from "antd-mobile";
import React from "react";
import ListaTareaCalendar from "../listaTareas/ListaTarea";
import es_ES from "antd-mobile/es/locales/es-ES";
import "./Calendario.css";

const defaultSingle = new Date();

const Calendario = () => {
  return (
    <>
      <ConfigProvider locale={es_ES}>
      <div className="div_content_calendario">
          <div>
            <Calendar
              selectionMode="single"
              defaultValue={defaultSingle}
              onChange={(val) => {
                console.log(val);
              }}
            />
          </div>
          <div className="div_lista">
            <Collapse>
              <Collapse.Panel key="1" title="Lista de tareas para la fecha">
                <ListaTareaCalendar />
              </Collapse.Panel>
            </Collapse>
          </div>
        </div>
      </ConfigProvider>
    </>
  );
};

export default Calendario;
