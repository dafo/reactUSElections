import { createContext, Dispatch, useContext, useEffect, useRef, useState } from 'react';
import { Candidate } from '../models/USElectionsData/candidate';
import { useGetCandidate, useGetCandidate1, useGetVoteCountResult, useGetVoteCountResult1 } from './uselections-data-hooks';
import { VoteCountResult } from '../models/USElectionsData/vote-count-result';

export const GlobalContext = createContext<{globalState: GlobalStateInterface, setGlobalState: Dispatch<React.SetStateAction<GlobalStateInterface>>}>(undefined as any);
export const useGlobalContext = () => useContext(GlobalContext);

export const useGlobalState = () => {
  const __loaded = useRef<boolean>(false);
  const initialState = {
    popularVotesDemocrat: undefined,
    popularVotesRepublican: undefined,
    democratCandidate: undefined,
    electoralVotesDemocrat: undefined,
    electoralVotesRepublican: undefined,
    republicanCandidate: undefined,
    currentlyChosenYear: 2020
  } as GlobalStateInterface;

  const [globalState, setGlobalState] = useState<GlobalStateInterface>(initialState);
  const { uSElectionsDataVoteCountResult: popularVotesDemocrat } = useGetVoteCountResult(globalState.currentlyChosenYear as any, 'Democrat');
  const { uSElectionsDataVoteCountResult: popularVotesRepublican } = useGetVoteCountResult(globalState.currentlyChosenYear as any, 'Republican');
  const { uSElectionsDataCandidate: democratCandidate } = useGetCandidate(globalState.currentlyChosenYear as any);
  const { uSElectionsDataVoteCountResult: electoralVotesDemocrat } = useGetVoteCountResult1(globalState.currentlyChosenYear as any, 'Democrat');
  const { uSElectionsDataVoteCountResult: electoralVotesRepublican } = useGetVoteCountResult1(globalState.currentlyChosenYear as any, 'Republican');
  const { uSElectionsDataCandidate: republicanCandidate } = useGetCandidate1(globalState.currentlyChosenYear as any);

  useEffect(() => {
    if (__loaded.current) {
      setGlobalState(prevState => { return {...prevState,
        popularVotesDemocrat
      }});
    }
  }, [popularVotesDemocrat]);

  useEffect(() => {
    if (__loaded.current) {
      setGlobalState(prevState => { return {...prevState,
        popularVotesRepublican
      }});
    }
  }, [popularVotesRepublican]);

  useEffect(() => {
    if (__loaded.current) {
      setGlobalState(prevState => { return {...prevState,
        democratCandidate
      }});
    }
  }, [democratCandidate]);

  useEffect(() => {
    if (__loaded.current) {
      setGlobalState(prevState => { return {...prevState,
        electoralVotesDemocrat
      }});
    }
  }, [electoralVotesDemocrat]);

  useEffect(() => {
    if (__loaded.current) {
      setGlobalState(prevState => { return {...prevState,
        electoralVotesRepublican
      }});
    }
  }, [electoralVotesRepublican]);

  useEffect(() => {
    if (__loaded.current) {
      setGlobalState(prevState => { return {...prevState,
        republicanCandidate
      }});
    }
  }, [republicanCandidate]);

  useEffect(() => {
    __loaded.current = true;
    return () => {
      __loaded.current = false;
    }
  }, []);

  return { globalState, setGlobalState };
};

interface GlobalStateInterface {
  popularVotesDemocrat: VoteCountResult | undefined;
  popularVotesRepublican: VoteCountResult | undefined;
  democratCandidate: Candidate | undefined;
  electoralVotesDemocrat: VoteCountResult | undefined;
  electoralVotesRepublican: VoteCountResult | undefined;
  republicanCandidate: Candidate | undefined;
  currentlyChosenYear: number | undefined;
}
