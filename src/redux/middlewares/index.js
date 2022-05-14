export const logAction = (store) => (next) => (action) => { 
  console.info("Dispatch: ", action);
  next(action);
} 
