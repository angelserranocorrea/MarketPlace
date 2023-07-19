import { Injectable } from '@nestjs/common';
import * as data from "../data/data.json"


@Injectable()
export class ContentService {

  findAll() {
    return data ;
  }

  findOne(id:string) {
    return data.find(e => e._id == id);
  }

}
