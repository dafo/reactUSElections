import { useCallback, useEffect, useState } from 'react';
import { Candidate } from '../models/USElectionsData/candidate';
import { CandidateVoteResult } from '../models/USElectionsData/candidate-vote-result';
import { getCandidate, getCandidate1, getCandidateVoteResultList, getStateVoteResultList, getVoteCountResult, getVoteCountResult1, getVoteResultList, getVoteResultList1, getYearModelList } from '../services/uselections-data';
import { StateVoteResult } from '../models/USElectionsData/state-vote-result';
import { VoteCountResult } from '../models/USElectionsData/vote-count-result';
import { VoteResult } from '../models/USElectionsData/vote-result';
import { YearModel } from '../models/USElectionsData/year-model';

export const useGetYearModelList = () => {
  const [yearModel, setYearModel] = useState<YearModel[]>([]);

  const requestYearModel = useCallback(() => {
    let ignore = false;
    getYearModelList()
      .then((data) => {
        if (!ignore) {
          setYearModel(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestYearModel();
  }, [requestYearModel]);

  return { requestUSElectionsDataYearModel: requestYearModel, uSElectionsDataYearModel: yearModel, setUSElectionsDataYearModel: setYearModel };
}

export const useGetVoteResultList = (year: any) => {
  const [voteResult, setVoteResult] = useState<VoteResult[]>([]);

  const requestVoteResult = useCallback(() => {
    let ignore = false;
    getVoteResultList(year)
      .then((data) => {
        if (!ignore) {
          setVoteResult(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, [year]);

  useEffect(() => {
    requestVoteResult();
  }, [year, requestVoteResult]);

  return { requestUSElectionsDataVoteResult: requestVoteResult, uSElectionsDataVoteResult: voteResult, setUSElectionsDataVoteResult: setVoteResult };
}

export const useGetVoteResultList1 = (year: any) => {
  const [voteResult, setVoteResult] = useState<VoteResult[]>([]);

  const requestVoteResult = useCallback(() => {
    let ignore = false;
    getVoteResultList1(year)
      .then((data) => {
        if (!ignore) {
          setVoteResult(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, [year]);

  useEffect(() => {
    requestVoteResult();
  }, [year, requestVoteResult]);

  return { requestUSElectionsDataVoteResult: requestVoteResult, uSElectionsDataVoteResult: voteResult, setUSElectionsDataVoteResult: setVoteResult };
}

export const useGetCandidateVoteResultList = (year: any) => {
  const [candidateVoteResult, setCandidateVoteResult] = useState<CandidateVoteResult[]>([]);

  const requestCandidateVoteResult = useCallback(() => {
    let ignore = false;
    getCandidateVoteResultList(year)
      .then((data) => {
        if (!ignore) {
          setCandidateVoteResult(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, [year]);

  useEffect(() => {
    requestCandidateVoteResult();
  }, [year, requestCandidateVoteResult]);

  return { requestUSElectionsDataCandidateVoteResult: requestCandidateVoteResult, uSElectionsDataCandidateVoteResult: candidateVoteResult, setUSElectionsDataCandidateVoteResult: setCandidateVoteResult };
}

export const useGetStateVoteResultList = (year: any) => {
  const [stateVoteResult, setStateVoteResult] = useState<StateVoteResult[]>([]);

  const requestStateVoteResult = useCallback(() => {
    let ignore = false;
    getStateVoteResultList(year)
      .then((data) => {
        if (!ignore) {
          setStateVoteResult(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, [year]);

  useEffect(() => {
    requestStateVoteResult();
  }, [year, requestStateVoteResult]);

  return { requestUSElectionsDataStateVoteResult: requestStateVoteResult, uSElectionsDataStateVoteResult: stateVoteResult, setUSElectionsDataStateVoteResult: setStateVoteResult };
}

export const useGetVoteCountResult = (year: any, party: any) => {
  const [voteCountResult, setVoteCountResult] = useState<VoteCountResult | undefined>();

  const requestVoteCountResult = useCallback(() => {
    let ignore = false;
    getVoteCountResult(year, party)
      .then((data) => {
        if (!ignore) {
          setVoteCountResult(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, [year, party]);

  useEffect(() => {
    requestVoteCountResult();
  }, [year, party, requestVoteCountResult]);

  return { requestUSElectionsDataVoteCountResult: requestVoteCountResult, uSElectionsDataVoteCountResult: voteCountResult, setUSElectionsDataVoteCountResult: setVoteCountResult };
}

export const useGetCandidate = (year: any) => {
  const [candidate, setCandidate] = useState<Candidate | undefined>();

  const requestCandidate = useCallback(() => {
    let ignore = false;
    getCandidate(year)
      .then((data) => {
        if (!ignore) {
          setCandidate(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, [year]);

  useEffect(() => {
    requestCandidate();
  }, [year, requestCandidate]);

  return { requestUSElectionsDataCandidate: requestCandidate, uSElectionsDataCandidate: candidate, setUSElectionsDataCandidate: setCandidate };
}

export const useGetVoteCountResult1 = (year: any, party: any) => {
  const [voteCountResult, setVoteCountResult] = useState<VoteCountResult | undefined>();

  const requestVoteCountResult = useCallback(() => {
    let ignore = false;
    getVoteCountResult1(year, party)
      .then((data) => {
        if (!ignore) {
          setVoteCountResult(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, [year, party]);

  useEffect(() => {
    requestVoteCountResult();
  }, [year, party, requestVoteCountResult]);

  return { requestUSElectionsDataVoteCountResult: requestVoteCountResult, uSElectionsDataVoteCountResult: voteCountResult, setUSElectionsDataVoteCountResult: setVoteCountResult };
}

export const useGetCandidate1 = (year: any) => {
  const [candidate, setCandidate] = useState<Candidate | undefined>();

  const requestCandidate = useCallback(() => {
    let ignore = false;
    getCandidate1(year)
      .then((data) => {
        if (!ignore) {
          setCandidate(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, [year]);

  useEffect(() => {
    requestCandidate();
  }, [year, requestCandidate]);

  return { requestUSElectionsDataCandidate: requestCandidate, uSElectionsDataCandidate: candidate, setUSElectionsDataCandidate: setCandidate };
}
