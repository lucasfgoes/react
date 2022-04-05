import { render, screen } from "@testing-library/react";
import { Posts } from '.';

const props = {
  posts: [
    {
      title: 'title 1',
      body: 'body 1',
      id: 1,
      cover: 'img/img1.png'
    },
    {
      title: 'title 2',
      body: 'body 2',
      id: 2,
      cover: 'img/img2.png'
    },
    {
      title: 'title 3',
      body: 'body 3',
      id: 3,
      cover: 'img/img3.png'
    }
  ]
}

describe('<Posts />', () => {

  it('should render Posts', () => {
    render(<Posts {...props} />);

    expect(screen.getAllByRole('heading', { name: /title/i })).toHaveLength(3);
    expect(screen.getAllByRole('img', { name: /title/i })).toHaveLength(3);
    expect(screen.getAllByText(/body/i));
  });

  it('should not render posts', () => {
    render(<Posts />);
    expect(screen.queryByRole('heading', { name: /title/i })).not.toBeInTheDocument();


  });

  it('should match snapshot', () => {
    const { container } = render(<Posts {...props} />);

    expect(container.firstChild).toMatchSnapshot();
  });

});