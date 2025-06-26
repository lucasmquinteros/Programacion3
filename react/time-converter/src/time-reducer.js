export function timeReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case TYPES.HORA: {
      return {
        day: payload / 24,
        hours: payload,
        minutes: payload * 60,
        seconds: payload * 3600,
      };
    }
    case TYPES.MINUTO: {
      return {
        day: payload / 1440,
        hours: payload / 60,
        minutes: payload,
        seconds: payload * 60,
      };
    }
    case TYPES.SEGUNDO: {
      return {
        day: payload / 86400,
        hours: payload / 3600,
        minutes: payload / 60,
        seconds: payload,
      };
    }
    case TYPES.DIA: {
      return {
        day: payload,
        hours: payload * 24,
        minutes: payload * 1440,
        seconds: payload * 86400,
      };
    }
    case TYPES.RESET: {
      return initialValues;
    }
    default: {
      return state;
    }
  }
}
export const initialValues = {
  day: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

export const TYPES = Object.freeze({
  DIA: "CAMBIAR_DIA",
  HORA: "CAMBIAR_HORA",
  MINUTO: "CAMBIAR_MINUTO",
  SEGUNDO: "CAMBIAR_SEGUNDO",
  RESET: "RESET",
});
