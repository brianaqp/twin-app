export interface Register {
  vessel: string;
  flow: string;
  loadingPort: string;
  totalShipment: string;
  maxArrivalDraft: string;
  portCalls: object[];
  stowagePlan: object[];
  calados: object[];
}

interface format {
  destinarario: string;
  nombres: string[];
}

export interface destinarios {
  armandor: format;
  trader: format[];
  recibidor: format[];
  agenteAduanal: format[];
  otros: format[];
}
