function connectDatabase() {
    try {
      const didConnect = database.connect();
      return true;
    } catch (error) {
      throw new Error("Could not connect to database!");
      return false;
    }
  }
  
  function determineSupportAgent(ticket) {
    const requestType = ticket.requestType;
    return requestType === "unknown" ? findAgentByRequest() : findAgentByRequestType(ticket.requestType);
  }
  
  function isInputValid(email, password) {
    if (!email.includes("@") || password.length < 7) {
      throw new Error("Invalid input");
    }
    return true;
  }