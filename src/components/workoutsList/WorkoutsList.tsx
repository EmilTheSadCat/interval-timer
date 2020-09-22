import React from 'react';
import WorkoutListElement, { IWorkout } from '@/components/workoutListElement/WorkoutListElement';
import './_workoutsList.scss';

const workouts: IWorkout[] = [
    {
        workoutId: 5632,
        workoutName: 'Fast One',
        workoutDuration: 160,
    },
    {
        workoutId: 8271,
        workoutName: 'Heavy Breathing',
        workoutDuration: 540,
    },
    {
        workoutId: 9921,
        workoutName: 'Forget Yourself',
        workoutDuration: 1000,
    },
];

const WorkoutsList: React.FC = () => {
    const workoutsList = workouts.map((workout) => (
        <WorkoutListElement
            workoutId={workout.workoutId}
            workoutName={workout.workoutName}
            workoutDuration={workout.workoutDuration}
            key={workout.workoutId}
        />
    ));
    return (
        <div className="workouts-list">
            {workoutsList.length > 0 ? (
                workoutsList
            ) : (
                <div className="workouts-list__no-workouts">No workouts found</div>
            )}
        </div>
    );
};

export default WorkoutsList;
