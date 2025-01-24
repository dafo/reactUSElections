import { useGlobalContext } from '../hooks/context-hooks';
import { IgrCard, IgrCardContent, IgrCardHeader, IgrCardMedia, IgrCardModule } from '@infragistics/igniteui-react';
import { IgrCategoryChart, IgrCategoryChartModule, IgrPieChart, IgrPieChartModule } from '@infragistics/igniteui-react-charts';
import { IgrColumn, IgrGrid, IgrGridModule } from '@infragistics/igniteui-react-grids';
import { useGetCandidateVoteResultList, useGetStateVoteResultList, useGetVoteResultList, useGetVoteResultList1 } from '../hooks/uselections-data-hooks';
import '@infragistics/igniteui-react-grids/grids';
import styles from './candidates-and-votes.module.css';
import createClassTransformer from '../style-utils';

IgrCardModule.register();
IgrCategoryChartModule.register();
IgrGridModule.register();
IgrPieChartModule.register();

export default function CandidatesAndVotes() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const { globalState } = useGlobalContext();
  const { uSElectionsDataVoteResult } = useGetVoteResultList(globalState.currentlyChosenYear as any);
  const { uSElectionsDataVoteResult: uSElectionsDataVoteResult1 } = useGetVoteResultList1(globalState.currentlyChosenYear as any);
  const { uSElectionsDataCandidateVoteResult } = useGetCandidateVoteResultList(globalState.currentlyChosenYear as any);
  const { uSElectionsDataStateVoteResult } = useGetStateVoteResultList(globalState.currentlyChosenYear as any);

  return (
    <>
      <div className={classes("row-layout candidates-and-votes-container")}>
        <div className={classes("column-layout group")}>
          <div className={classes("row-layout header")}>
            <div className={classes("row-layout year_container")}>
              <div className={classes("column-layout year")}>
                <div className={classes("row-layout group_1")}>
                  <span className={classes("material-icons icon")}>
                    <span key={uuid()}>star</span>
                  </span>
                  <span className={classes("material-icons icon")}>
                    <span key={uuid()}>star</span>
                  </span>
                  <span className={classes("material-icons icon")}>
                    <span key={uuid()}>star</span>
                  </span>
                  <span className={classes("material-icons icon")}>
                    <span key={uuid()}>star</span>
                  </span>
                  <span className={classes("material-icons icon")}>
                    <span key={uuid()}>star</span>
                  </span>
                </div>
                <div className={classes("row-layout group_2")}>
                  <div className={classes("column-layout group_3")}>
                    <h2 className={classes("content")}>
                      <span>{globalState.currentlyChosenYear}</span>
                    </h2>
                  </div>
                </div>
                <div className={classes("row-layout group_4")}>
                  <p className={classes("typography__subtitle-2 text")}>
                    <span>P R E S I D E N T I A L</span>
                  </p>
                </div>
                <div className={classes("row-layout group_5")}>
                  <p className={classes("typography__subtitle-2 text_1")}>
                    <span>E L E C T I O N</span>
                  </p>
                </div>
              </div>
            </div>
            <div className={classes("row-layout candidates")}>
              <IgrCard className={classes("card")}>
                <div className={classes("group_6")} key={uuid()}>
                  <IgrCardHeader>
                    <h3 slot="title" key={uuid()}>
                      <span key={uuid()}></span>
                    </h3>
                    <h5 slot="subtitle" key={uuid()}>
                      <span key={uuid()}></span>
                    </h5>
                  </IgrCardHeader>
                  <IgrCardContent className={classes("body-content")}>
                    <div className={classes("column-layout group_7")} key={uuid()}>
                      <div className={classes("column-layout group_8")}>
                        <h5 className={classes("h5")}>
                          <span>{globalState.democratCandidate?.name}</span>
                        </h5>
                        <div className={classes("row-layout dm_pill_small")}>
                          <p className={classes("typography__overline text_1")}>
                            <span>DEMOCRATIC</span>
                          </p>
                        </div>
                      </div>
                      <div className={classes("row-layout group_9")}>
                        <div className={classes("column-layout group_10")}>
                          <h4 className={classes("content")}>
                            <span>{globalState.electoralVotesDemocrat?.votes}</span>
                          </h4>
                          <p className={classes("typography__subtitle-2 text_2")}>
                            <span>Electoral Votes</span>
                          </p>
                        </div>
                        <div className={classes("column-layout group_11")}>
                          <h4 className={classes("content")}>
                            <span>{globalState.popularVotesDemocrat?.votes}</span>
                          </h4>
                          <p className={classes("typography__subtitle-2 text_2")}>
                            <span>Popular Votes</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </IgrCardContent>
                </div>
                <IgrCardMedia className={classes("media-content")} key={uuid()}>
                  <img src={globalState.democratCandidate?.imageFull} className={classes("image")} key={uuid()} />
                </IgrCardMedia>
              </IgrCard>
              <IgrCard className={classes("card")}>
                <div className={classes("group_6")} key={uuid()}>
                  <IgrCardHeader>
                    <h3 slot="title" key={uuid()}>
                      <span key={uuid()}></span>
                    </h3>
                    <h5 slot="subtitle" key={uuid()}>
                      <span key={uuid()}></span>
                    </h5>
                  </IgrCardHeader>
                  <IgrCardContent className={classes("body-content")}>
                    <div className={classes("column-layout group_7")} key={uuid()}>
                      <div className={classes("column-layout group_8")}>
                        <h5 className={classes("h5")}>
                          <span>{globalState.republicanCandidate?.name}</span>
                        </h5>
                        <div className={classes("row-layout rp_pill_small")}>
                          <p className={classes("typography__overline text_1")}>
                            <span>REPUBLICAN</span>
                          </p>
                        </div>
                      </div>
                      <div className={classes("row-layout group_9")}>
                        <div className={classes("column-layout group_10")}>
                          <h4 className={classes("h4")}>
                            <span>{globalState.electoralVotesRepublican?.votes}</span>
                          </h4>
                          <p className={classes("typography__subtitle-2 text_2")}>
                            <span>Electoral Votes</span>
                          </p>
                        </div>
                        <div className={classes("column-layout group_11")}>
                          <h4 className={classes("h4")}>
                            <span>{globalState.popularVotesRepublican?.votes}</span>
                          </h4>
                          <p className={classes("typography__subtitle-2 text_2")}>
                            <span>Popular Votes</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </IgrCardContent>
                </div>
                <IgrCardMedia className={classes("media-content")} key={uuid()}>
                  <img src={globalState.republicanCandidate?.imageFull} className={classes("image")} key={uuid()} />
                </IgrCardMedia>
              </IgrCard>
            </div>
          </div>
          <div className={classes("row-layout pies_and_grid")}>
            <div className={classes("row-layout pie_charts")}>
              <div className={classes("column-layout group_12")}>
                <p className={classes("typography__subtitle-2 content")}>
                  <span>Electoral Vote</span>
                </p>
                <div className={classes("group_13")}>
                  <IgrPieChart dataSource={uSElectionsDataVoteResult} startAngle="90" othersCategoryThreshold="0.5" labelMemberPath="resultAsString" valueMemberPath="resultAsNumber"></IgrPieChart>
                </div>
              </div>
              <div className={classes("column-layout group_12")}>
                <p className={classes("typography__subtitle-2 content")}>
                  <span>Popular Vote</span>
                </p>
                <div className={classes("group_13")}>
                  <IgrPieChart dataSource={uSElectionsDataVoteResult1} startAngle="90" othersCategoryThreshold="0.5" labelMemberPath="resultAsString" valueMemberPath="resultAsNumber"></IgrPieChart>
                </div>
              </div>
            </div>
            <div className={classes("column-layout group_14")}>
              <IgrGrid data={uSElectionsDataCandidateVoteResult} primaryKey="party" allowFiltering="true" filterMode="excelStyleFilter" className={classes("ig-typography ig-scrollbar grid")}>
                <IgrColumn field="party" dataType="string" header="Party" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="candidateName" dataType="string" header="Candidate" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="electoralVotesNumber" dataType="number" header="Electoral Votes" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="electoralVotesPercentage" dataType="number" header="Electoral Votes (%)" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="popularVotesNumber" dataType="number" header="Popular Votes" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="popularVotesPercentage" dataType="number" header="Popular Votes (%)" sortable="true" selectable="false"></IgrColumn>
              </IgrGrid>
            </div>
          </div>
          <div className={classes("column-layout group_14")}>
            <p className={classes("typography__subtitle-2 text_3")}>
              <span> Votes by State</span>
            </p>
            <div className={classes("group_15")}>
              <IgrCategoryChart dataSource={uSElectionsDataStateVoteResult} chartType="Column" xAxisLabelAngle="60" computedPlotAreaMarginMode="Series"></IgrCategoryChart>
            </div>
            <div className={classes("row-layout group_16")}>
              <div className={classes("row-layout sources_pill_small")}>
                <p className={classes("typography__overline text_4")}>
                  <span>2024 RESULTS</span>
                </p>
              </div>
              <div className={classes("row-layout group_17")}>
                <p className={classes("typography__caption text_5")}>
                  <span>The results from the 2024 US Elections are predicted, and the sources are:</span>
                </p>
                <a href="https://www.economist.com/interactive/us-2024-election/prediction-model/president" className={classes("typography__caption hyperlink")}>
                  <span>The Economist newspaper, September 30, 2024</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
