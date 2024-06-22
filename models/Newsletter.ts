class Newsletter {
  private subscribers: string[] = [];

  subscribe(email: string) {
    if (!this.subscribers.includes(email)) {
      this.subscribers.push(email);
      console.log(`Subscribed: ${email}`);
    } else {
      console.log(`Already subscribed: ${email}`);
    }
  }

  getSubscribers(): string[] {
    return this.subscribers;
  }
}

export default Newsletter;