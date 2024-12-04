<<<<<<< HEAD
import { alunosMock } from "../_mocks_/aluno.mock";
=======
import { alunosMock } from "../__mocks__/alunos.mock";
>>>>>>> ae25707ec585571df6e113055c8d790682ac2d5b

const knexMock = () => {
    return {
        select: jest.fn().mockReturnValueOnce(alunosMock),
        insert: jest.fn().mockReturnValueOnce([1]),
    };
};

export const knexServiceMock: any = {
    obterConexao: jest.fn(() => knexMock),
};
