/**
 * Komponent MessageSkeleton wyświetla "szkielet" (placeholder) wiadomości w czacie.
 * Używany podczas ładowania wiadomości, aby użytkownik widział animowane miejsce na treść.
 * Dzięki temu interfejs wygląda płynniej i użytkownik wie, że dane się ładują.
 */
const MessageSkeleton = () => {
	return (
		<>
			{/* Szkielet wiadomości z lewej strony (np. od rozmówcy) */}
			<div className='flex gap-3 items-center'>
				<div className='skeleton w-10 h-10 rounded-full shrink-0'></div>
				<div className='flex flex-col gap-1'>
					<div className='skeleton h-4 w-40'></div>
					<div className='skeleton h-4 w-40'></div>
				</div>
			</div>
			{/* Szkielet wiadomości z prawej strony (np. od siebie) */}
			<div className='flex gap-3 items-center justify-end'>
				<div className='flex flex-col gap-1'>
					<div className='skeleton h-4 w-40'></div>
				</div>
				<div className='skeleton w-10 h-10 rounded-full shrink-0'></div>
			</div>
		</>
	);
};

export default MessageSkeleton;
