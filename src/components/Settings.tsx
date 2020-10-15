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
	]

	const types = [
		{
			type: Type.MULTIPLE
		},
		// {
		// 	type: Type.TRUEFALSE
		// }
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
			</FieldsContainer>
		</SettingsWrapper>
	);
}

export default Settings;