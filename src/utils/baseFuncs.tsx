import yaml from "js-yaml";
import {JsonTest, TestState} from "./testTypes.ts";

export const checkAnswer = (input: string, test: string) => {
    return input === test
}

export const implodeJsonToYaml = (jsonTest: JsonTest) => {
    return yaml.dump(jsonTest);
}

export const getUnsolvedTests = (listOfTests: TestState[]) => {
    return listOfTests.filter((t) => !t.solved)
}