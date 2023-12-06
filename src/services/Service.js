import Web3 from "web3";
import abi from "./abi.json";

class Service {
    addressContract = "0x85B276B1a297E963fD892EF35F0B45fC5A5885B2";
    web3 = new Web3(window.ethereum);
    contract = new this.web3.eth.Contract(abi, this.addressContract);

    async createRef(wallet) {
        try {
            return await this.contract.methods.createRef(wallet).send({from: wallet});
        } catch (error) {
            console.log(error);
        }
    }

    async getUserReferral(wallet) {
        try {
            return await this.contract.methods.getUserReferral().call({from: wallet});
        } catch (e) {
            console.log(e);
        }
    }

    async createNFT(id, name, desc, img, rice, releasedAmount, wallet) {
        try {
            return await this.contract.methods.createNFT(id, name, desc, img, rice, releasedAmount).send({from: wallet})
        } catch (e) {
            console.log(e)
        }
    }

    async getAsset(id, wallet) {
        try {
            return await this.contract.methods.getAsset(id).call({from: wallet})
        } catch (e) {
            console.log(e)
        }
    }

    async createCollection(id, name, desc, ids, amounts, wallet) {
        try {
            return await this.contract.methods.createCollection(id, name, desc, ids, amounts).send({from: wallet})
        } catch (e) {
            console.log(e)
        }
    }

    async getCollectionAsset() {
        try {
            return await this.contract.methods.getCollectionAsset().call();
        } catch (e) {
            console.log(e)
        }
    }

    async referralUse(referral, wallet) {
        try {
            return await this.contract.methods.useReferral(referral).send({from: wallet})
        } catch (e) {
            console.log(e)
        }
    }
}

export default new Service();
