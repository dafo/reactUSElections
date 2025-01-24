import { GlobalContext, useGlobalState } from './hooks/context-hooks';
import { IgrIconButton, IgrIconButtonModule, IgrNavbar, IgrNavbarModule, IgrNavDrawer, IgrNavDrawerHeaderItem, IgrNavDrawerItem, IgrNavDrawerItemModule, IgrNavDrawerModule, IgrRipple, IgrRippleModule } from '@infragistics/igniteui-react';
import { Outlet } from 'react-router-dom';
import { useRef } from 'react';
import { useGetYearModelList } from './hooks/uselections-data-hooks';
import styles from './app.module.css';
import createClassTransformer from './style-utils';

IgrIconButtonModule.register();
IgrNavbarModule.register();
IgrNavDrawerItemModule.register();
IgrNavDrawerModule.register();
IgrRippleModule.register();

export default function App() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const navDrawer = useRef<IgrNavDrawer>(null);
  const { globalState, setGlobalState } = useGlobalState();
  const { uSElectionsDataYearModel } = useGetYearModelList();

  return (
    <GlobalContext.Provider value ={{ globalState, setGlobalState}}>
      <div className={classes("column-layout master-view-container")}>
        <IgrNavbar className={classes("navbar")}>
          <div style={{display: 'contents'}} slot="start" key={uuid()}>
            <IgrIconButton variant="flat" clicked={() => navDrawer?.current?.toggle()} className={classes("icon-button")}>
              <span className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>menu</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrIconButton>
          </div>
          <div className={classes("row-layout group")} key={uuid()}>
            <h6 className={classes("h6")}>
              <span>US Presidential Elections over the years</span>
            </h6>
          </div>
        </IgrNavbar>
        <div className={classes("row-layout group_1")}></div>
        <div className={classes("row-layout group_2")}>
          <IgrNavDrawer open="true" position="relative" ref={navDrawer} className={classes("nav-drawer")}>
            <IgrNavDrawerHeaderItem key={uuid()}>
              <div slot="content" key={uuid()}>YEAR</div>
            </IgrNavDrawerHeaderItem>
            {uSElectionsDataYearModel?.map((item) => (
              <div style={{display: 'contents'}} onClick={() => setGlobalState(prevState => ({...prevState, currentlyChosenYear: item.year}))} key={uuid()}>
                <IgrNavDrawerItem>
                  <div slot="content" key={uuid()}>{item.year}</div>
                </IgrNavDrawerItem>
              </div>
            ))}
          </IgrNavDrawer>
          <div className={classes("view-container")}>
            <Outlet></Outlet>
          </div>
        </div>
        <div className={classes("row-layout group_1")}></div>
        <div className={classes("row-layout group_3")}>
          <span className={classes("material-icons icon_1")}>
            <span key={uuid()}>star</span>
          </span>
          <div className={classes("row-layout group_4")}>
            <p className={classes("typography__body-2 text")}>
              <span>Powered by </span>
            </p>
            <a href="https://www.appbuilder.dev/" className={classes("typography__body-2 hyperlink")}>
              <span>App Builder</span>
            </a>
          </div>
          <span className={classes("material-icons icon_1")}>
            <span key={uuid()}>star</span>
          </span>
        </div>
      </div>
    </GlobalContext.Provider>
  );
}
