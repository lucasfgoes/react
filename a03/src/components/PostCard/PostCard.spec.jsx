import { render, screen } from "@testing-library/react";
import { PostCard } from '.';
import { PostCardPropsMock } from './mock';

const props = PostCardPropsMock;

describe('<PostCard />', () => {

  it('should render PostCard correctly', () => {
    /* const { debug } = render(<PostCard {...props} />);
    debug(); */
    render(<PostCard {...props} />);
    expect(screen.getByRole('img', { name: /title 1/i })).toHaveAttribute('src', props.cover);
    expect(screen.getByRole('heading', { name: 'title 1 1' })).toBeInTheDocument();
    expect(screen.getByText('body 1')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<PostCard {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });

});