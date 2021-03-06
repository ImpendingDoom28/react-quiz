import { shuffleArray } from './utils';

export enum Difficulty {
    EASY = "easy", MEDIUM = "medium", HARD = "hard"
}

export enum Type {
    MULTIPLE = "multiple", TRUEFALSE = "boolean"
}


export enum Category {
    RANDOM = "any",
    GENERAL = 9,
    BOOKS,
    FILMS,
    MUSIC,
    MUSICALS_AND_THEATERS,
    TV,
    VIDEO_GAMES,
    BOARD_GAMES,
    NATURE,
    COMPUTERS,
    MATHEMATICS,
    MYTHOLOGY,
    SPORTS,
    GEOGRAPHY,
    HISTORY,
    POLITICS,
    ART,
    CELEBRITIES,
    ANIMALS,
    VEHICLES,
    COMICS,
    GADGETS,
    ANIME,
    CARTOONS
}

export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

export type QuestionState = Question & { answers: string[] };

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty, type: Type, category: Category) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=${type}&category=${category}`;
    const data = await (await fetch(endpoint)).json();
    return data.results.map((question: Question) => (
        {
            ...question,
            answers: shuffleArray(
                [...question.incorrect_answers, question.correct_answer]
            )
        }
    ))
}