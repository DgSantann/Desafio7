<<<<<<< HEAD
import { Aluno } from "../aluno.model";
=======
import { Aluno } from "./aluno.model";
>>>>>>> ae25707ec585571df6e113055c8d790682ac2d5b
import { KnexService } from "../../service/knex";

export default new Aluno(new KnexService());