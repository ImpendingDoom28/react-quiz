import React from 'react';

// Components
import {
	Wrapper as SettingsWrapper,
	InputField,
	FieldsContainer
} from './QuestionCard.styles';

// Types
import { Difficulty, Type, Category } from '../API';

type Props = {
	setDifficulty: (difficulty: Difficulty) => void | undefined;
	setType: (type: Type) => void | undefined;
	setCategory: (category: Category) => void | undefined;
}

const Settings: React.FC<Props> = (
	{
		setDifficulty,
		setType,
		setCategory
	}) => {


	const difficulties = [
		{
			type: Difficulty.EASY,
		},
		{
			type: Difficulty.MEDIUM,
		},
		{
			type: Difficulty.HARD,
		}
	];

	const types = [
		{
			type: Type.MULTIPLE
		},
		// {
		// 	type: Type.TRUEFALSE
		// }
	];

	const categories = [
		{
			type: Category.RANDOM,
			text: "Random questions"
		},
		{
			type: Category.GENERAL,
			text: "General knowledge"
		},
		{
			type: Category.BOOKS,
			text: "Books"
		},
		{
			type: Category.FILMS,
			text: "Films"
		},
		{
			type: Category.MUSIC,
			text: "Music"
		},
		{
			type: Category.ANIME,
			text: "Anime",
		},
		{
			type: Category.MUSICALS_AND_THEATERS,
			text: "Musicals and theaters"
		},
		{
			type: Category.TV,
			text: "TV questions"
		},
		{
			type: Category.VIDEO_GAMES,
			text: "Video Games",
		},
		{
			type: Category.BOARD_GAMES,
			text: "Board Games",
		},
		{
			type: Category.NATURE,
			text: "Nature"
		}
	]

	return (
		<SettingsWrapper>
			<h2>Settings</h2>
			<FieldsContainer>
				<InputField>
					<label htmlFor="difficulty">Select difficulty:</label>
					<select
						name="difficulty"
						id="difficulty"
						onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setDifficulty(e.target.value as Difficulty)}
					>
						{
							difficulties.map((diff, index) => {
								return (
									<option key={index} value={diff.type}>
										{diff.type.substring(0, 1).toUpperCase().concat(diff.type.substring(1))}
									</option>
								)
							})
						}
					</select>
				</InputField>
				<InputField>
					<label htmlFor="type">Select quiz type:</label>
					<select
						name="type"
						id="type"
						onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setType(e.target.value as Type)}
					>
						{
							types.map((quizType, index) => {
								return (
									<option key={index} value={quizType.type}>
										{quizType.type.substring(0, 1).toUpperCase().concat(quizType.type.substring(1))}
									</option>
								)
							})
						}
					</select>
				</InputField>
				<InputField>
					<label htmlFor="category">Select category:</label>
					<select
						name="category"
						id="type"
						onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCategory(e.target.value as Category)}
					>
						{
							categories.map((category, index) => {
								return (
									<option key={index} value={category.type}>
										{category.text}
									</option>
								)
							})
						}
						{/* <option value="any">Any Category</option>
						<option value="9">General Knowledge</option>
						<option value="10">Entertainment: Books</option>
						<option value="11">Entertainment: Film</option>
						<option value="12">Entertainment: Music</option>
						<option value="13">Entertainment: Musicals &amp; Theatres</option>
						<option value="14">Entertainment: Television</option>
						<option value="15">Entertainment: Video Games</option>
						<option value="16">Entertainment: Board Games</option>
						<option value="17">Science &amp; Nature</option>
						<option value="18">Science: Computers</option>
						<option value="19">Science: Mathematics</option>
						<option value="20">Mythology</option>
						<option value="21">Sports</option>
						<option value="22">Geography</option>
						<option value="23">History</option>
						<option value="24">Politics</option>
						<option value="25">Art</option>
						<option value="26">Celebrities</option>
						<option value="27">Animals</option>
						<option value="28">Vehicles</option>
						<option value="29">Entertainment: Comics</option>
						<option value="30">Science: Gadgets</option>
						<option value="31">Entertainment: Japanese Anime &amp; Manga</option>
						<option value="32">Entertainment: Cartoon &amp; Animations</option> */}
					</select>
				</InputField>
			</FieldsContainer>
		</SettingsWrapper>
	);
}

export default Settings;