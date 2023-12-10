import Web3 from "web3";
import abi from "./abi.json";

class Service {
  addressContract = "0x0758E9FA0069a8F633337603421FD69735D7277F";
  web3 = new Web3(window.ethereum);
  contract = new this.web3.eth.Contract(abi, this.addressContract);

  async createRef(wallet) {
    try {
      return await this.contract.methods
        .createRef(wallet)
        .send({ from: wallet });
    } catch (error) {
      console.log(error);
    }
  }

  async getUserReferral(wallet) {
    try {
      return await this.contract.methods
        .getUserReferral()
        .call({ from: wallet });
    } catch (e) {
      console.log(e);
    }
  }

  async createNFT(name, desc, img, rice, releasedAmount, wallet) {
    try {
      return await this.contract.methods
        .createNFT(name, desc, img, rice, releasedAmount)
        .send({ from: wallet });
    } catch (e) {
      console.log(e);
    }
  }

  async getArrayAsset() {
    try {
      return await this.contract.methods.getArrayAsset().call();
    } catch (e) {
      console.log(e);
    }
  }

  async getUserAssets(wallet) {
    try {
      return await this.contract.methods.getUserAssets().call({ from: wallet });
    } catch (e) {
      console.log(e);
    }
  }

  async createCollection(name, desc, ids, amounts, wallet) {
    try {
      return await this.contract.methods
        .createCollection(name, desc, ids, amounts)
        .send({ from: wallet });
    } catch (e) {
      console.log(e);
    }
  }

  async getCollectionAsset() {
    try {
      return await this.contract.methods.getCollectionAsset().call();
    } catch (e) {
      console.log(e);
    }
  }

  async referralUse(referral, wallet) {
    try {
      return await this.contract.methods
        .useReferral(referral)
        .send({ from: wallet });
    } catch (e) {
      console.log(e);
    }
  }

  async getBalance(wallet) {
    try {
      return await this.contract.methods.getBalance().call({ from: wallet });
    } catch (e) {
      console.log(e);
    }
  }

  async getDiscount(ref) {
    try {
      return await this.contract.methods.getDiscount(ref).call();
    } catch (e) {
      console.log(e);
    }
  }

  async getSellsArray() {
    try {
      return await this.contract.methods.getSellsArray().call();
    } catch (e) {
      console.log(e);
    }
  }

  async transferNFT(id, receiver, amount, wallet) {
    try {
      return await this.contract.methods
        .transferNFT(id, receiver, amount)
        .send({ from: wallet });
    } catch (e) {
      console.log(e);
    }
  }

  async sellNFT(id, amount, price, wallet) {
    try {
      return await this.contract.methods
        .sellNFT(id, amount, price)
        .send({ from: wallet });
    } catch (e) {
      console.log(e);
    }
  }

  async buyNFT(id, amount, discount, wallet) {
    try {
      return await this.contract.methods
        .buyNFT(id, amount, discount)
        .send({ from: wallet });
    } catch (e) {
      console.log(e);
    }
  }

  async getBet(id) {
    try {
      return await this.contract.methods.getBet(id).call();
    } catch (e) {
      console.log(e);
    }
  }

  async getAuctionArray(id) {
    try {
      return await this.contract.methods.getAuctionArray(id).call();
    } catch (e) {
      console.log(e);
    }
  }
}

export default new Service();
