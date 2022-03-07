import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { lastValueFrom, Observable } from "rxjs";
import { UserData } from "src/app/models";

@Injectable()
export class BlockchainService {

	constructor(private http: HttpClient) { }

	getNFT(walletAddress: string): Promise<UserData> {

		return lastValueFrom(
			this.http.get<UserData>(`/api/${walletAddress}`)
      )
    }


	postData(walletAddress: string): Promise<UserData> {

		return lastValueFrom(
			this.http.get<UserData>(`/api/${walletAddress}`)
      )
    }


  }

