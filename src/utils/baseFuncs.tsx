import yaml from "js-yaml";
import {JsonTest} from "./testTypes.ts";

export const checkAnswer = (input: string, test: string) => {
    return input === test
}

export const implodeJsonToYaml = (jsonTest: JsonTest) => {
    return yaml.dump(jsonTest);
}

