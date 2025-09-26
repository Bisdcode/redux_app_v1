import React from 'react';
import { connect } from 'react-redux';

// import { bindActionCreators } from 'redux';
// import * as CourseActions from '../../store/actions/course'
// import * as UiActions from '../../store/actions/ui';
import { toggleLesson } from '../../store/actions/course';
import { showMessage } from '../../store/actions/ui';

function Sidebar(props) {
    const { modules, toggleLesson } = props;
    console.log("props: ", props)

    const handleClick = () => {
        props.showMessage({
            type: 'success',
            message: 'Operação concluída com sucesso!'
        })
    }

    return (
        <aside>
            {modules.map(module => (
                <div key={module.id}>
                    <strong>{module.title}</strong>
                    <ul>
                        {module.lessons.map(lesson => (
                            <li key={lesson.id}>{lesson.title}
                                <button onClick={() => toggleLesson(module, lesson)}>Assistir</button>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
            <button onClick={handleClick}>Notificação</button>
        </aside>
    )
}

const mapStateToProps = state => ({
    modules: state.course.modules
})

// const mapDispatchToProps = dispatch =>
//     bindActionCreators({
//         ...CourseActions,
//         ...UiActions
//     },
//         dispatch)

export default connect(mapStateToProps, { showMessage, toggleLesson })(Sidebar);